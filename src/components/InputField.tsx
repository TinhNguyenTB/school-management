import { FieldError } from "react-hook-form";

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function InputField({
    inputProps,
    label,
    name,
    register,
    defaultValue,
    error,
    type = "text"
}: InputFieldProps) {
    return (
        <div className='flex flex-col gap-2 w-full md:w-1/4'>
            <label className='text-xs text-gray-500'>{label}</label>
            <input type={type} {...register(name)}
                className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
                defaultValue={defaultValue}
                {...inputProps}
            />
            {error?.message &&
                <p className='text-red-500 text-xs'>{error?.message.toString()}</p>
            }
        </div>
    )
}
