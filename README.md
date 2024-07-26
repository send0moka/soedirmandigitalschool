<button
          id="modal-signin"
          aria-label={`Modal open and closed`}
          class={cn(
            "hidden md:flex",
            "h-12 rounded-full py-2 px-4 items-center justify-center gap-2",
            "bg-ijo-tua text-white",
            "border border-hitam",
            "transition-colors duration-300"
          )}
        >
          <span class="hidden md:flex">Sign In</span>
          <svg class="w-5">
            <use href="/ui.svg#link"></use>
          </svg>
        </button>