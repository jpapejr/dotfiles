# # If you come from bash you might have to change your $PATH.
# # export PATH=$HOME/bin:/usr/local/bin:$PATH


# # Aliases
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
alias c='podman ps -p'
alias p='podman'
alias pe='podman exec -it'
alias pp='podman pod ps'
alias pi='podman images'
alias prmi="podman rmi"
alias pprune="podman system prune"
alias pv="podman volume"
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

export PATH="$PATH:/Users/jtp/.local/bin:/usr/local/bin"

export HISTFILE=~/.zsh_history
export SAVEHIST=1000
setopt inc_append_history share_history

GH_MDWIDTH="150"

# BEGIN ServBay Environment Block
# ==============================================================
# ATTENTION: This section is automatically generated and managed
#            by the ServBay application to configure environment
#            variables for its services (PHP, Node, DBs, etc.).
#
# DO NOT EDIT THIS BLOCK MANUALLY - YOUR CHANGES WILL BE LOST
#            during Servbay updates or restarts.
#
# For support and documentation, please visit:
# https://support.servbay.com
#
# If you encounter issues, try restarting your terminal or run
# `source ~/.zshrc` (or `source ~/.bash_profile`).
# ==============================================================
#
export PATH="/Applications/ServBay/script/alias:/Applications/ServBay/bin:/Applications/ServBay/sbin:/Applications/ServBay/script:/Applications/ServBay/package/python/current/Python.framework/Versions/Current/bin:/Applications/ServBay/package/node/current/bin:/Applications/ServBay/package/go/current/bin:/Applications/ServBay/package/openjdk/current/bin:/Applications/ServBay/package/rust/current/bin:/Applications/ServBay/package/ruby/current/bin:/Applications/ServBay/package/dotnetsdk/current:/Applications/ServBay/package/dotnetsdk/current/tools:$HOME/.dotnet/tools/Applications/ServBay/package/mono/current:$PATH"
### OpenJDK(Java) Environment added by ServBay
export JAVA_HOME="/Applications/ServBay/package/openjdk/current.sdk/Contents/Home"
export CLASS_PATH="$JAVA_HOME/lib"
### PostgreSQL Environment added by ServBay
export PGHOST="/Applications/ServBay/tmp"
# END ServBay Environment Block
