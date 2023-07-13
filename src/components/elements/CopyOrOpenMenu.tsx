import { DropdownMenu as Dropdown } from "@kobalte/core";

import IconChevronDown from "components/icons/chevron-down";
import IconCopy from "components/icons/copy";
import { For, type JSX } from "solid-js";

type Props = {
  title: string | JSX.Element;
  options: {
    onSelect: () => void;
    child: JSX.Element;
  }[];
};

export default function CopyOrOpenMenu({ title, options }: Props) {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger class="flex items-center space-x-1 font-body text-sm leading-[1.1rem] text-slate-800 ui-expanded:underline dark:text-slate-300/75 md:text-base md:leading-tight lg:text-lg lg:leading-6">
        <Dropdown.Icon class="transition-transform ui-expanded:rotate-180">
          <IconChevronDown class="w-3 md:w-4" />
        </Dropdown.Icon>
        <span>{title}</span>
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content class="-mt-1.5 space-y-1 rounded-md border-2 border-solid border-white bg-slate-200 p-2 pt-1 text-slate-700 shadow-md shadow-gray-500 ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-50 ui-expanded:slide-in-from-top-12 ui-closed:animate-out ui-closed:fade-out-0 ui-closed:zoom-out-50 ui-closed:slide-out-to-top-12">
          <Dropdown.Arrow />

          <For each={options} fallback={<div>Loading...</div>}>
            {(option, index) => (
              <>
                <Dropdown.Item
                  class="flex justify-between gap-8 rounded-md px-2 py-1 hover:bg-slate-700 hover:text-slate-200 active:bg-slate-600 md:mt-0"
                  onSelect={option.onSelect}
                >
                  {option.child}
                </Dropdown.Item>
                {index() !== options.length - 1 && (
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

export function CopyOrOpenPhone() {
  return (
    <CopyOrOpenMenu
      title={
        <>
          <span class="pr-2">+62 851 7432 8051</span>
        </>
      }
      options={[
        {
          onSelect: () => navigator.clipboard.writeText("+6285174328051"),
          child: (
            <>
              Copy
              <IconCopy class="w-4" />
            </>
          ),
        },
        {
          onSelect: () =>
            window.open(
              "https://api.whatsapp.com/send?phone=6285174328051&&text=Hello+Alberto+%F0%9F%91%8B",
            ),
          child: (
            <>
              Chat on WA
              <img
                src="/images/whatsapp.svg"
                alt="whatsapp logo"
                class="-mr-1 w-6"
              />
            </>
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
        {
          onSelect: () =>
            navigator.clipboard.writeText("alberto.cahyantara@gmail.com"),
          child: (
            <>
              Copy
              <IconCopy class="w-4" />
            </>
          ),
        },
        {
          onSelect: () =>
            window.location.replace(
              "mailto:alberto.cahyantara@gmail.com?subject=Job%20Opportunity&body=Dear%20Alberto%20R%20Cahyantara%2CI%20came%20across%20your%20profile%20during%20my%20search%20for%20talented%20front-end%20developers%2C%20and%20I%20believe%20you%20would%20be%20a%20great%20fit%20for%20our%20company.%20We%20have%20an%20exciting%20job%20opportunity%20as%20a%20%5BFront-end%20Developer%5D%20at%20%5BCompany%20Name%5D.Position%3A%20%5BFront-end%20Developer%5DCompany%3A%20%5BCompany%20Name%5DLocation%3A%20%5BLocation%5DEmployment%20Type%3A%20%5BFull-time%2FPart-time%2FContract%5DSalary%3A%20Competitive%2C%20based%20on%20experienceIf%20you%20are%20interested%20in%20this%20opportunity%2C%20please%20reply%20to%20this%20email.%20We%20would%20love%20to%20discuss%20further%20details%20and%20schedule%20an%20interview%20with%20you.Looking%20forward%20to%20hearing%20from%20you!Best%20regards%2C%5BYour%20Name%5D%5BYour%20Title%2FPosition%5D%5BCompany%20Name%5D%5BContact%20Information%5D",
            ),
          child: (
            <>
              Send email
              <img src="/images/gmail.svg" alt="gmail logo" class="w-5" />
            </>
          ),
        },
      ]}
    />
  );
}
