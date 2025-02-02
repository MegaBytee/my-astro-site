import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as motion from "motion/react-client";
interface Props {
  src: string;
  alt?: string;
  fallback: string;
  className?: string;
}
export default function AvatarIcon(props: Props) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Avatar className={props.className}>
        <AvatarImage src={props.src} alt={props.alt} />
        <AvatarFallback>{props.fallback}</AvatarFallback>
      </Avatar>
    </motion.div>
  );
}
