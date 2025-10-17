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

# export EDITOR=hx

autoload -U colors; colors
#export ITERM_ENABLE_SHELL_INTEGRATION_WITH_TMUX=YES

# # Created by `pipx` on 2025-01-06 21:55:38
# export PATH="$PATH:/Users/jtp/.local/bin:/usr/local/bin"

eval "$(starship init zsh)"

export PATH="$PATH:/Users/jtp/.local/bin:/usr/local/bin:/Users/jtp/go/bin:/Users/jtp/.cargo/bin"

export HISTFILE=~/.zsh_history
export SAVEHIST=1000
setopt inc_append_history share_history

GH_MDWIDT="150"

### MANAGED BY RANCHER DESKTOP START (DO NOT EDIT)
export PATH="/Users/jtp/.rd/bin:$PATH"
### MANAGED BY RANCHER DESKTOP END (DO NOT EDIT)

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/jtp/miniforge3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/jtp/miniforge3/etc/profile.d/conda.sh" ]; then
        . "/Users/jtp/miniforge3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/jtp/miniforge3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


# >>> mamba initialize >>>
# !! Contents within this block are managed by 'mamba shell init' !!
export MAMBA_EXE='/Users/jtp/miniforge3/bin/mamba';
export MAMBA_ROOT_PREFIX='/Users/jtp/miniforge3';
__mamba_setup="$("$MAMBA_EXE" shell hook --shell zsh --root-prefix "$MAMBA_ROOT_PREFIX" 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__mamba_setup"
else
    alias mamba="$MAMBA_EXE"  # Fallback on help from mamba activate
fi
unset __mamba_setup
# <<< mamba initialize <<<

# Added by LM Studio CLI (lms)
export PATH="$PATH:/Users/jtp/.lmstudio/bin"
# End of LM Studio CLI section
