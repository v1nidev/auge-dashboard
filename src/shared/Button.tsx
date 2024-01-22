import { ark } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

export const Button = styled(ark.button, button)
export type ButtonProps = HTMLStyledProps<typeof Button>