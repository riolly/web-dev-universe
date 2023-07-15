export default function IconCopy({ class: className }: { class: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class={className}
    >
      <path
        fill="currentColor"
        d="M448 352H288c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H396.1c4.2 0 8.3 1.7 11.3 4.7l67.9 67.9c3 3 4.7 7.1 4.7 11.3V320c0 17.7-14.3 32-32 32zM497.9 81.9L430.1 14.1c-9-9-21.2-14.1-33.9-14.1H288c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V416H256v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32H192V128H64z"
      />
    </svg>
  );
}
