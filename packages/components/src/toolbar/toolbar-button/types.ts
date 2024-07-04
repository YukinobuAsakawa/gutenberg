/**
 * External dependencies
 */
import type { ReactNode } from 'react';

export type ToolbarButtonProps = {
	/**
	 * Children to be rendered inside the button.
	 */
	children?: ReactNode;
	/**
	 * An optional class name for the button container.
	 */
	containerClassName?: string;
	/**
	 * Additional props to be passed alongside props.
	 */
	extraProps?: any;
	/**
	 * Indicates if the button is active.
	 */
	isActive?: boolean;
	/**
	 * Indicates if the button is disabled.
	 *
	 * @deprecated Use `disabled` instead.
	 * @ignore
	 */
	isDisabled?: boolean;
	/**
	 * An optional subscript for the button.
	 */
	subscript?: string;
	/**
	 * An optional title/label for the button.
	 */
	title?: string;
};

export type ToolbarButtonDeprecatedProps = {
	/**
	 * Whether to keep the button focusable when disabled.
	 *
	 * @deprecated ToolbarButton will always be focusable even when disabled.
	 * @ignore
	 */
	__experimentalIsFocusable?: boolean;
};

export type ToolbarButtonContainerProps = {
	/**
	 * Children to be rendered inside the button container.
	 */
	children?: ReactNode;
	/**
	 * An optional class name for the button container.
	 */
	className?: string;
};
