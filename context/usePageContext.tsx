import { Header } from "@/components/Header/Header";
import { Modal } from "@/components/Modal/Modal";
import {
  ReactNode,
  createContext,
  createRef,
  useEffect,
  useState,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { Transition } from "react-transition-group";
import SmoothScrollbar from "smooth-scrollbar";
import Scrollbar from "smooth-scrollbar";

type TPageContext = {
  scrollbar: SmoothScrollbar | null;
  showModal: Dispatch<SetStateAction<boolean>>;
};

const PageContext = createContext<TPageContext>({
  scrollbar: null,
  showModal: () => false,
});

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  const [scrollbar, setScrollbar] = useState<SmoothScrollbar | null>(null);
  const [inProp, setInProp] = useState<boolean>(false);
  const scrollbarRef = createRef<HTMLDivElement>();
  const modalRef = useRef(null);

  useEffect(() => {
    if (scrollbarRef.current) {
      setScrollbar(Scrollbar.init(scrollbarRef.current));
    }
  }, [scrollbarRef]);

  return (
    <PageContext.Provider value={{ scrollbar, showModal: setInProp }}>
      <Header />
      <div style={{ height: "100%", overflow: "auto" }} ref={scrollbarRef}>
        {children}
      </div>
      <Transition
        nodeRef={modalRef}
        in={inProp}
        timeout={{
          appear: 300,
          enter: 0,
          exit: 300,
        }}
      >
        {(state) =>
          state !== "exited" && <Modal ref={modalRef} state={state} />
        }
      </Transition>
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
