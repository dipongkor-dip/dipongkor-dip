"use client";

import smoothScrollTo from "@/src/components/smooth-scroll";
import {Button} from "@/src/components/ui/button";

const ContactButton = () => (
  <Button
    onClick={() => smoothScrollTo("contact")}
    className="h-9 cursor-pointer px-4 text-xs shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md max-md:h-8 max-md:px-3"
  >
    Contact Me
  </Button>
);

export default ContactButton;