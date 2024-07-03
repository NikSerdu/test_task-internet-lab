import cn from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { TypeQAListItem } from "./QAListItem.type";

const QAListItem: FC<Omit<TypeQAListItem, "id">> = ({ answer, quastion }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="flex items-center  py-6 border-t border-b border-light-grey hover:cursor-pointer hover:text-primary transition duration-200"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <span className="body-18 font-bold pr-2">{quastion}</span>
        <button
          className={cn(
            "min-w-6 min-h-6 border-2 border-black rounded-full relative transition duration-200 ml-auto ",
            {
              "rotate-45": isOpen,
            }
          )}
        >
          <div className="w-3 h-[1px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black"></div>
          <div className="w-[1px] h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black"></div>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="body-18 text-dark-grey py-6">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QAListItem;
