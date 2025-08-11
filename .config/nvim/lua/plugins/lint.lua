return {
  {
    "mfussenegger/nvim-lint",
    opts = {
      linters = {
        ["markdownlint-cli2"] = {
          args = { "--config", "/home/jtp/.markdownlint-cli2.yaml", "--" },
        },
      },
    },
  },
}
