<template>
  <div id="🔥Demo">
    <img id="🔥Demo__Img" src="https://play.tailwindcss.com/img/beams.jpg" alt="" width="1308" />
    <div id="🔥Demo__Div">
    </div>
    <div id="🔥Demo__X">
      <div id="🔥Demo__X__X">
        <img id="🔥Demo__X__X__Img" src="https://play.tailwindcss.com/img/logo.svg" alt="Tailwind Play" />
        <div id="🔥Demo__X__X__X">
          <div id="🔥Demo__X__X__X__X">
            <p id="🔥Demo__X__X__X__X__P">An advanced online playground for Tailwind CSS, including support for
              things like:</p>
            <ul id="🔥Demo__X__X__X__X__Ul">
              <li id="🔥Demo__X__X__X__X__Ul__Li">
                <svg id="🔥Demo__X__X__X__X__Ul__Li__Svg" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p id="🔥Demo__X__X__X__X__Ul__Li__P">
                  Customizing your
                  <code id="🔥Demo__X__X__X__X__Ul__Li__P__Code">tailwind.config.js</code> file
                </p>
              </li>
              <li id="🔥Demo__X__X__X__X__Ul__Li">
                <svg id="🔥Demo__X__X__X__X__Ul__Li__Svg" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p id="🔥Demo__X__X__X__X__Ul__Li__P">
                  Extracting classes with
                  <code id="🔥Demo__X__X__X__X__Ul__Li__P__Code">@apply</code>
                </p>
              </li>
              <li id="🔥Demo__X__X__X__X__Ul__Li">
                <svg id="🔥Demo__X__X__X__X__Ul__Li__Svg" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p id="🔥Demo__X__X__X__X__Ul__Li__P">Code completion with instant preview</p>
              </li>
            </ul>
            <p id="🔥Demo__X__X__X__X__P2">Perfect for learning how the framework works, prototyping a new idea,
              or creating a demo to share online.
            </p>
          </div>
          <div id="🔥Demo__X__X__X__X2">
            <p id="🔥Demo__X__X__X__X2__P">Want to dig deeper into Tailwind?</p>
            <p id="🔥Demo__X__X__X__X2__P2">
              <a id="🔥Demo__X__X__X__X2__P2__A" href="https://tailwindcss.com/docs">Read the docs
                &rarr;</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// @include utils_base-preflight-v3-modify;

// smaller size
@include utils_base-preflight-v4-modify;

#🔥Demo {
  @include relative;
  @include flex;
  @include min-h-screen;
  @include flex-col;
  @include justify-center;
  @include overflow-hidden;
  @include bg-gray-50;
  @include py-6;

  @include sm {
    @include py-12;
  }

  @include utils_reset-tw;
}

#🔥Demo__Img {
  @include absolute;
  @include top-1\/2;
  @include left-1\/2;
  @include max-w-none;
  @include \-translate-x-1\/2;
  @include \-translate-y-1\/2;
  @include utils_reset-tw;
}

#🔥Demo__Div {
  mask-image: linear-gradient(180deg, white, rgba(255, 255, 255, 0));
  @include absolute;
  @include inset-0;
  @include bg-(url(https://play.tailwindcss.com/img/grid.svg));
  @include bg-center;
  @include utils_reset-tw;
}

#🔥Demo__X {
  @include relative;
  @include bg-white;
  @include px-6;
  @include pt-10;
  @include pb-8;
  @include shadow-xl;
  @include ring-1;
  @include ring-gray-900(5%);

  @include sm {
    @include mx-auto;
    @include max-w-lg;
    @include rounded-lg;
    @include px-10;
  }

  @include utils_reset-tw;
}

#🔥Demo__X__X {
  @include mx-auto;
  @include max-w-md;
  @include utils_reset-tw;
}

#🔥Demo__X__X__Img {
  @include h-6;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X {
  @include divide-y;
  @include divide-gray-300(50%);
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X {
  @include space-y-6;
  @include py-8;
  @include text-base;
  @include leading-7;
  @include text-gray-600;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X__Ul {
  @include space-y-4;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X__Ul__Li {
  @include flex;
  @include items-center;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X__Ul__Li__Svg {
  @include h-6;
  @include w-6;
  @include flex-none;
  @include fill-sky-100;
  @include stroke-sky-500;
  @include stroke-2;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X__Ul__Li__P {
  @include ml-4;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X__Ul__Li__P__Code {
  @include text-sm;
  @include font-bold;
  @include text-gray-900;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X2 {
  @include pt-8;
  @include text-base;
  @include font-semibold;
  @include leading-7;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X2__P {
  @include text-gray-900;
  @include utils_reset-tw;
}

#🔥Demo__X__X__X__X2__P2__A {
  @include text-sky-500;

  &:hover {
    @include text-sky-600;
  }
}
</style>