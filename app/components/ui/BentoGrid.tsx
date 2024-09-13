import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 md:auto-rows-[18rem] gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};



export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // Add specific grid positioning logic based on the item ID
  let gridPosition = '';
  
  if (id === 1) {
    gridPosition = 'md:col-span-2 md:row-span-2'; // The 1st item spans two columns and two rows
  } else if (id === 2 || id === 3) {
    gridPosition = 'md:col-span-1 md:row-span-1'; // The 2nd and 3rd items take one column and one row
  }

  return (
    <div
      className={cn(
        `relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ${gridPosition}`,
        className
      )}
      style={{
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 39%, rgba(96,104,105,1) 80%)'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
      </div>

      <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}> 
          {spareImg && (
            <img
            src={spareImg}
            alt={img}
            className= {'object-cover, object-center w-full h-full'}
            />
          )}
      </div>

      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white-100 font-bold"></div>
        </BackgroundGradientAnimation>
      )}

      <div className= {cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
      </div>
      <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
      </div>
    </div>
  );
};

