import { DropdownMenu as Dropdown } from "@kobalte/core";

import IconChevronDown from "components/icons/chevron-down";
import IconCopy from "components/icons/copy";
import IconWhatsapp from "components/icons/whatsapp";
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
      <Dropdown.Trigger class="flex items-center space-x-1 font-body text-sm leading-[1.1rem] text-slate-800 ui-expanded:underline dark:text-slate-300/75 md:space-x-2 md:text-base md:leading-tight lg:text-lg lg:leading-6">
        <Dropdown.Icon class="transition-transform ui-expanded:rotate-180 ">
          <IconChevronDown class="w-3 md:w-4" />
        </Dropdown.Icon>
        <span>{title}</span>
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content class="-mt-1.5 space-y-1 rounded-md border-2 border-solid border-white bg-slate-200 p-2 pt-1 text-slate-700 shadow-md shadow-gray-500">
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
          onSelect: () => window.open("https://wa.me/+6285174328051"),
          child: (
            <>
              Chat on WA
              <IconWhatsapp class="w-5 text-[#3bd774]" />
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
          onSelect: () => window.open("mailto:alberto.cahyantara@gmail"),
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
