interface ContentHeaderProps {
  title: string;
  description?: string;
  isUpperCase?: boolean;
}

const Contentheader = ({title, description, isUpperCase=true}: ContentHeaderProps) => {
  return (
      <div className="flex flex-col items-center">
        <p className={`font-bold text-[36px] leading-[32px] text-center tracking-[0.02em] ${isUpperCase? "uppercase" : ""}`}>
          {title}
        </p>
        <p className="font-lato font-normal text-[24px] leading-[32px] text-center tracking-[0.02em] mt-[34px] w-[1039px]">
          {description}
        </p>
      </div>
  )
}

export default Contentheader;
