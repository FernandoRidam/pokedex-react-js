import { AnimatePresence } from "framer-motion";
import { Dialog, Message } from "./styles";
import { useStore } from "../../store";

export const Alert = () => {
  const {
    alert,
  } = useStore();

  return (
    <AnimatePresence>
      {
        alert.message !== '' && (
          <Dialog
            open
            $status={alert.status}
            initial={{
              height: 0,
            }}
            animate={{
              height: 56,
            }}
            exit={{
              height: 0,
            }}
          >
            <Message
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              {alert.message}
            </Message>
          </Dialog>
        )
      }
    </AnimatePresence>
  );
};
