import { createSignal, For, Setter, Show } from "solid-js";

import { DropdownMenu as Dropdown } from "@kobalte/core";
import clsx from "clsx";

import IconChevronDown from "components/icons/chevron-down";
import IconCopy from "components/icons/copy";
import IconCopySolid from "components/icons/copy-solid";

import type { JSX } from "solid-js";

import "./tada.css";

type setterFn = (setOpen: Setter<boolean>) => void;

type Props = {
  title: string | JSX.Element;
  options: {
    child: JSX.Element;
    onSelect: setterFn;
    closeOnSelect?: boolean;
  }[];
};

export default function CopyOrOpenMenu(props: Props) {
  const [open, setOpen] = createSignal(false);

  return (
    <Dropdown.Root open={open()} onOpenChange={setOpen} modal={false}>
      <Dropdown.Trigger class="flex items-center space-x-1 font-body text-sm leading-[1.1rem] text-slate-800 ui-expanded:underline dark:text-slate-300/75 md:text-base md:leading-tight lg:text-lg lg:leading-6">
        <Dropdown.Icon class="transition-transform ui-expanded:rotate-180">
          <IconChevronDown class="w-3 md:w-4" />
        </Dropdown.Icon>
        <span>{props.title}</span>
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content class="-mt-1.5 space-y-1 rounded-md border-2 border-solid border-white bg-slate-200 p-2 pt-1 text-slate-700 shadow-md shadow-gray-500 ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-50 ui-expanded:slide-in-from-top-12 ui-closed:animate-out ui-closed:fade-out-0 ui-closed:zoom-out-50 ui-closed:slide-out-to-top-12">
          <Dropdown.Arrow />

          <For each={props.options} fallback={<div>Loading...</div>}>
            {(option, index) => (
              <>
                <Dropdown.Item
                  class="min-w-[10rem] px-2 py-1 hover:cursor-pointer hover:font-bold md:mt-0"
                  onSelect={() => option.onSelect(setOpen)}
                  closeOnSelect={option.closeOnSelect}
                >
                  {option.child}
                </Dropdown.Item>
                {index() !== props.options.length - 1 && (
                  <Dropdown.Separator class="border-top border-slate-300" />
                )}
              </>
            )}
          </For>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
}

function copyOption(text: string) {
  const [copied, setCopied] = createSignal(false);
  return {
    onSelect: (setOpen: Setter<boolean>) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setOpen((o) => !o);
        setCopied(false);
      }, 900);
    },
    closeOnSelect: false,
    child: (
      <Show
        when={copied()}
        fallback={
          <div
            class={clsx(
              "flex justify-between",
              // not working, add delay or solid transition group
              copied() && "animate-out fade-out-0 zoom-out-50 duration-1000",
            )}
          >
            Copy
            <IconCopy class="w-4" />
          </div>
        }
      >
        <div class="animation-tada flex justify-between duration-1000">
          Copied
          <IconCopySolid class="w-4 text-blue-800" />
        </div>
      </Show>
    ),
  };
}

export function CopyOrOpenPhone() {
  return (
    <CopyOrOpenMenu
      title={
        <>
          <span class="pr-2">+62 851 7432 8051</span>
        </>
      }
      options={[
        copyOption("+6285174328051"),
        {
          onSelect: () =>
            window.open(
              "https://api.whatsapp.com/send?phone=6285174328051&&text=Hello+Alberto+%F0%9F%91%8B",
            ),
          child: (
            <div class="flex justify-between">
              Chat on WA
              <img
                src="src/assets/images/whatsapp.svg"
                alt="whatsapp logo"
                class="-mr-1 w-6"
              />
            </div>
          ),
        },
      ]}
    />
  );
}

export function CopyOrOpenEmail() {
  return (
    <CopyOrOpenMenu
      title={
        <>
          alberto.cahyantara@gmail<span class="hidden md:inline">.com</span>
        </>
      }
      options={[
        copyOption("alberto.cahyantara@gmail.com"),
        {
          onSelect: () =>
            window.location.replace(
              " mailto:alberto.cahyantara@gmail.com?body=Dear%20Alberto%20R%20Cahyantara%2C%0D%0A%0D%0AI%20came%20across%20your%20profile%20while%20searching%20for%20talented%20front-end%20developers%2C%20and%20I%20believe%20you%20would%20be%20an%20excellent%20fit%20for%20our%20company.%20We%20have%20an%20exciting%20job%20opportunity%20as%20follows.%0D%0A%0D%0APosition%3A%20%5BFront-end%20Developer%5D%0D%0ACompany%3A%20%5BCompany%20Name%5D%0D%0ALocation%3A%20%5BLocation%5D%0D%0AEmployment%20Type%3A%20%5BFull-time%2FPart-time%2FContract%5D%0D%0ASalary%3A%20Competitive%2C%20based%20on%20experience%0D%0A%0D%0AIf%20you%20are%20interested%20in%20this%20opportunity%2C%20please%20reply%20to%20this%20email.%20We%20would%20love%20to%20discuss%20further%20details%20and%20schedule%20an%20interview%20with%20you.%0D%0A%0D%0AI%20am%20looking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards%2C%0D%0A%0D%0A%5BYour%20Name%5D%0D%0A%5BYour%20Title%2FPosition%5D%0D%0A%5BCompany%20Name%5D%0D%0A%5BContact%20Information%5D ",
            ),
          child: (
            <div class="flex justify-between">
              Send email
              <img
                src="src/assets/images/gmail.svg"
                alt="gmail logo"
                class="w-5"
              />
            </div>
          ),
        },
      ]}
    />
  );
}
