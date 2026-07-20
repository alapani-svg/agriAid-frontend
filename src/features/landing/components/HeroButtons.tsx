import { ArrowRight } from "lucide-react";
import Button from "../../../shared/ui/Button";
import { scrollToId } from "../utils/scroll";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        variant="primary"
        size="lg"
        glassy
        className="inline-flex items-center justify-center gap-2 shadow-lg"
        onClick={() => scrollToId("get-started")}
      >
        Get started free
        <ArrowRight className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        glassy
        className="inline-flex items-center justify-center gap-2"
        onClick={() => scrollToId("workflow")}
      >
        See how it works
      </Button>
    </div>
  );
}
