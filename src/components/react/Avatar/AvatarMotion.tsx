import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as motion from "motion/react-client";
interface Props {
    src: string;
    alt?: string;
    fallback: string;
    className?: string;
}
export default function AvatarMotion(props: Props) {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
            <Avatar className={props.className}>
                <AvatarImage src={props.src} alt={props.alt} />
                <AvatarFallback>{props.fallback}</AvatarFallback>
            </Avatar>
        </motion.div>
    );
}
