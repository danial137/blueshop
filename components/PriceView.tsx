interface Props{
    price: number |undefined;
    discount: number | undefined
    className?: string;
    label?:string
}

const PriceView = ({price,discount,label,className}:Props) => {
  return (
    <div>PriceView</div>
  )
}

export default PriceView