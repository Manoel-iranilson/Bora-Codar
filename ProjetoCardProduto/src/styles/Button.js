import {defineStyle, defineStyleConfig} from '@chakra-ui/styled-system';
import {mode, transparentize} from '@chakra-ui/theme-tools';

const baseStyle = defineStyle({
  lineHeight: '1.2',
  borderRadius: 'md',
  fontWeight: 'semibold',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  _focusVisible: {
    boxShadow: 'outline',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  _hover: {
    _disabled: {
      bg: 'initial',
    },
  },
});

const customVariant = defineStyle(() => {
  return {
    borderWidth: '1px',
    borderColor: '#271A45',
    color: 'white',
    borderRadius: '3xl',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',
    _dark: {
      color: 'gray.800',
    },

    _hover: {
      transform: 'scale(1.05, 1.05)',
    },

    _active: {
      transform: 'scale(1, 1)',
    },
  };
});

const variants = {
  custom: customVariant,
};

const sizes = {
  lg: defineStyle({
    h: '12',
    minW: '12',
    fontSize: 'lg',
    px: '6',
  }),
  md: defineStyle({
    h: '10',
    minW: '10',
    fontSize: 'md',
    px: '4',
  }),
  sm: defineStyle({
    h: '8',
    minW: '8',
    fontSize: 'sm',
    px: '3',
  }),
  xs: defineStyle({
    h: '6',
    minW: '6',
    fontSize: 'xs',
    px: '2',
  }),
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'gray',
  },
});
