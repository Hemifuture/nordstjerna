import { ButtonProps, defaultButtonProps } from './props';

const getButtonClassName = (props: ButtonProps): string => {
    const classes = ['button'];
    if (props.level) {
        classes.push(`level-${props.level}`);
    }
    if (props.status && props.status !== 'default') {
        classes.push(props.status);
    }
    if (props.className) {
        classes.push(props.className);
    }
    return classes.join(' ');
};

export const NButton = (props: ButtonProps) => {
    const mergedProps = { ...defaultButtonProps, ...props };
    const className = getButtonClassName(mergedProps);

    return (
        <button
            class={className}
            style={mergedProps.style}
            disabled={mergedProps.disabled}
            onClick={mergedProps.onClick}
        >
            {mergedProps.loading ? 'Loading...' : props.children}
        </button>
    );
};