import { ButtonProps, defaultButtonProps } from './props';

export const NButton = (props: ButtonProps) => {
  const mergedProps = { ...defaultButtonProps, ...props };
  return (
    <button
      class={mergedProps.className}
      style={mergedProps.style}
      disabled={mergedProps.disabled}
      onClick={mergedProps.onClick}
    >
      {mergedProps.loading ? 'Loading...' : props.children}
    </button>
  );
};
