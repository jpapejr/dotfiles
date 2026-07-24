# # If you come from bash you might have to change your $PATH.
# # export PATH=$HOME/bin:/usr/local/bin:$PATH


# # Aliases
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
alias gi='gh issue'
alias giv='gh issue view'
alias givc='gh issue view -c'
alias gic='gh issue comment'
#alias ls='exa'
alias o='ollama'
alias vim='nvim'
alias lz='lazygit'
alias orchestrate='uvx --from ibm-watsonx-orchestrate orchestrate'
alias ibmfiles='/usr/bin/git --git-dir=$HOME/ibm_data/.git --work-tree=$HOME/ibm_data'
alias c='container'
alias ai='bob2 run'
alias cai='c run -i --dns 8.8.8.8 -v $PWD:/workspace:rw --env-file ~/.bob/harness.env bob-shell2:v1.1.0'


export GPG_TTY=$(tty)


autoload -U colors; colors
autoload -Uz edit-command-line
zle -N edit-command-line
#export ITERM_ENABLE_SHELL_INTEGRATION_WITH_TMUX=YES

# # Created by `pipx` on 2025-01-06 21:55:38
# export PATH="$PATH:/Users/jtp/.local/bin:/usr/local/bin"

# Starship
eval "$(starship init zsh)"

# fzf key bindings and completion
source <(fzf --zsh)

# Inline command suggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh



export PATH="$PATH:/Users/jtp/.local/bin:/usr/local/bin:/Users/jtp/go/bin:/Users/jtp/.cargo/bin:/Applications/PyCharm.app/Contents/MacOS"

export HISTFILE=~/.zsh_history
export SAVEHIST=1000
setopt inc_append_history share_history

GH_MDWIDT="150"


#
#   export NVM_DIR="$HOME/.nvm"                                                                                                                                                               
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm                                                                                              
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
. "/Users/jtp/.acme.sh/acme.sh.env"

# bun completions
[ -s "/Users/jtp/.bun/_bun" ] && source "/Users/jtp/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

fpath+=~/.zfunc; autoload -Uz compinit; compinit

zstyle ':completion:*' menu select


bobcoins() {
  local api_key

  read -rs "api_key?Enter Bob API Key: "
  echo

  curl -sSL \
    -H "Authorization: Apikey $api_key" \
    https://api.us-east.bob.ibm.com/admin/v1/profile \
    | jq -r '.instances[].teams[] |
      "💰 \(.usage | round)/\(.budget_limit) (\((.budget_limit - .usage) / .budget_limit * 100 | round)%)"'
}
