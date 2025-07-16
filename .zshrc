# # If you come from bash you might have to change your $PATH.
# # export PATH=$HOME/bin:/usr/local/bin:$PATH


# # Aliases
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
alias gi='gh issue'
alias giv='gh issue view'
alias givc='gh issue view -c'
alias gic='gh issue comment'
#alias ls='exa'
alias fabric='fabric-ai'

# export EDITOR=hx

autoload -U colors; colors
#export ITERM_ENABLE_SHELL_INTEGRATION_WITH_TMUX=YES

# # Created by `pipx` on 2025-01-06 21:55:38
# export PATH="$PATH:/Users/jtp/.local/bin:/usr/local/bin"

eval "$(starship init zsh)"

export PATH="$PATH:/Users/jtp/.local/bin:/usr/local/bin:/Users/jtp/go/bin"

export HISTFILE=~/.zsh_history
export SAVEHIST=1000
setopt inc_append_history share_history

GH_MDWIDT="150"
export TMUXAI_OPENROUTER_API_KEY="no-key"


### MANAGED BY RANCHER DESKTOP START (DO NOT EDIT)
export PATH="/Users/jtp/.rd/bin:$PATH"
### MANAGED BY RANCHER DESKTOP END (DO NOT EDIT)
