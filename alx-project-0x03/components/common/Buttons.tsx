interface ButtonProps {
    buttonlabel: string;
    buttonsize: string;
    buttonBackgroundColor?: 'red' | 'orange' | 'green' 
    action?: () => void;
}

const Button = ({
    buttonlabel, buttonSize, buttonBackgroundColor , action
}: ButtonProps) => {

    const backgroundColor = buttonBackgroundColor ? {
        red: 'bg-red-500',
        orange: 'bg-orange-500',
        green: 'bg-green-500',
    }[buttonBackgroundColor] : 'bg-slate-500';

    return (
        <button onClick={action} className={'${backgroundColorClass}
            ${buttonSize} px-6 py-2 text-sm font-seminold rounded-lg 
             hover:${backgroundColorClass}/50 transition duration-300 text-white`}>
            {buttonlabel}
        </button>
    )
}  
export default Button;  