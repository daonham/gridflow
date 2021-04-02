/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { ColorPalette } from "@wordpress/block-editor";
import {
	Dropdown,
	Tooltip,
	BaseControl,
	ButtonGroup,
	Button,
	__experimentalGradientPicker as GradientPicker,
	ColorPicker
} from "@wordpress/components";

const GridFlowColorPicker = ({
	label,
	value,
	gradients = false,
	alpha = false,
	colorPalette = true,
	onChange,
	hint = __("Custom Color Picker")
}) => {
	const colorGradientSettings = useSelect(select => {
		const settings = select("core/block-editor").getSettings();
		return settings;
	});

	const [currentTab, setCurrentTab] = useState(
		value && value.includes("gradient") && gradients ? "gradient" : "color"
	);

	return (
		<BaseControl
			id={null}
			label={label}
			className="gridflow-color-component"
		>
			<Dropdown
				className={classnames(
					"components-color-palette__item-wrapper components-circular-option-picker__option-wrapper",
					value ? "" : "components-color-palette__custom-color"
				)}
				contentClassName="gridflow-color-component__popover"
				renderToggle={({ isOpen, onToggle }) => (
					<Tooltip text={hint}>
						<Button
							aria-expanded={isOpen}
							className="components-circular-option-picker__option"
							onClick={onToggle}
							aria-label={hint}
							style={{
								background: value || "",
								color: `rgba(0, 0, 0, 0)`
							}}
						></Button>
					</Tooltip>
				)}
				renderContent={() => (
					<div className="gridflow-color-component__render">
						{gradients && (
							<ButtonGroup className="block-editor-color-gradient-control__button-tabs gridflow-color-component__tabs">
								<Button
									isSmall
									isPrimary={currentTab === "color"}
									isSecondary={currentTab !== "color"}
									onClick={() => setCurrentTab("color")}
								>
									{"Solid"}
								</Button>
								<Button
									isSmall
									isPrimary={currentTab === "gradient"}
									isSecondary={currentTab !== "gradient"}
									onClick={() => setCurrentTab("gradient")}
								>
									{"Gradient"}
								</Button>
							</ButtonGroup>
						)}

						{currentTab === "color" && (
							<>
								<ColorPicker
									color={value}
									onChangeComplete={color => {
										let colorString;

										if (
											typeof color.rgb === "undefined" ||
											color.rgb.a === 1
										) {
											colorString = color.hex;
										} else {
											const { r, g, b, a } = color.rgb;
											colorString = `rgba(${r}, ${g}, ${b}, ${a})`;
										}
										onChange(colorString);
									}}
									disableAlpha={!alpha}
								/>

								{colorPalette && (
									<ColorPalette
										value={value}
										onChange={color => {
											onChange(color || "");
										}}
										disableCustomColors={true}
									/>
								)}
							</>
						)}

						{currentTab === "gradient" && gradients && (
							<GradientPicker
								value={value}
								onChange={newGradient =>
									onChange(newGradient || "")
								}
								disableCustomGradients={false}
								{...colorGradientSettings}
							/>
						)}
					</div>
				)}
			/>
		</BaseControl>
	);
};

export default GridFlowColorPicker;
