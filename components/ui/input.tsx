import { cva, VariantProps } from "class-variance-authority"

const inputBase = [
  "flex",
  "w-full",
  "border",
  "border-input",
  "bg-transparent",
  "text-sm",
  "ring-offset-background",
  "file:border-0",
  "file:bg-transparent",
  "file:text-sm",
  "file:font-medium",
  "placeholder:text-muted-foreground",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-ring",
  "focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
]
const inputVariants = cva(inputBase, {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    sizing: {
      sm: "h-8 p-2",
      md: "h-10 px-3 py-2",
      lg: "h-12 px-5 py-4",
      xl: "h-14 px-7 py-6",
    },
    variant: {
      ghost: "border-none",
    },
  },
  defaultVariants: {
    sizing: "md",
    rounded: "md",
  },
})

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input: React.FC<IInputProps> = ({
  rounded,
  sizing,
  variant,
  className,
  type,
  ...rest
}) => {
  return (
    <input
      type={type}
      {...rest}
      className={inputVariants({ rounded, variant, sizing, className })}
    />
  )
}
Input.displayName = "Input"

export { Input, inputVariants }
