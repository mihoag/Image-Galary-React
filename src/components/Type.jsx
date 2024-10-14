import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          '<span class="text-2xl sm:text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">Hello everyone!</span>',
          '<span class="text-2xl sm:text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">I am Minh Hoang</span>',
          '<span class="text-2xl sm:text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">Welcome to my gallery!</span>',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
        // Use this to render HTML inside strings
        html: true,
      }}
    />
  );
}

export default Type;
