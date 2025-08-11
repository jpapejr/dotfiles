return {
  {
    "catppuccin/nvim",
    lazy = false,
    name = "catppuccin",
    config = function()
      require("catppuccin").setup({
        flavour = "macchiato", -- Set the desired Catppuccin flavor (latte, frappe, macchiato, mocha)
        -- Further configurations can be added here if needed, such as
        -- integrations with other plugins: https://github.com/catppuccin/nvim#integrations
      })
    end,
  },
  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "catppuccin", -- Set the colorscheme to use Catppuccin
    },
  },
}

