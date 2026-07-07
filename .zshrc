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
alias cmd='cmux markdown open'


export GPG_TTY=$(tty)


autoload -U colors; colors
#export ITERM_ENABLE_SHELL_INTEGRATION_WITH_TMUX=YES

# # Created by `pipx` on 2025-01-06 21:55:38
# export PATH="$PATH:/Users/jtp/.local/bin:/usr/local/bin"

eval "$(starship init zsh)"

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


b() {
  cd 
  local start end elapsed rc
  local mode="${1:-ask}"
  local workspace="$2"

  shift 2

  start=$(date +%s)

  P="$*"

  P="${P//\'/\\\'}"   # escape '
  P="${P//\"/\\\"}"   # escape "

  #container run --dns 8.8.8.8 -it --rm \
  #  --env-file "$HOME/.bob/harness.env" \
  #  -v "$HOME/.bob:/root/.bob" \
  #  -v "$PWD:/workspace" \
  #  bob_harness:v1.0.6 \
  #  bob --chat-mode "$mode" --yolo --accept-license \
  #    --hide-intermediary-output \
  #    -p $PROMPT | glow -
  shuru run \
  --from bob-shell \
  --allow-net \
  --allow-host-writes \
  --mount $HOME/.bob:/root/.bob \
  --mount $workspace:/workspace \
  -- sh -c "cd /workspace && bob --yolo --hide-intermediary-output --accept-license --chat-mode $mode $P" | bat --language markdown --pp

  rc=${PIPESTATUS[0]}

  end=$(date +%s)
  elapsed=$((end - start))

  osascript \
  -e 'beep' \
  -e "display notification \"AI job completed (${elapsed}s)\" with title \"Terminal\"" \
  >/dev/null 2>&1

  printf '\n\nElapsed time: %ss\n' "$elapsed"


  return $rc
}



bv() {
  cd 
  local start end elapsed rc
  local mode="${1:-ask}"
  local workspace="$2"

  shift 2

  start=$(date +%s)

  P="$*"

  P="${P//\'/\\\'}"   # escape '
  P="${P//\"/\\\"}"   # escape "

  #container run --dns 8.8.8.8 -it --rm \
  #  --env-file "$HOME/.bob/harness.env" \
  #  -v "$HOME/.bob:/root/.bob" \
  #  -v "$PWD:/workspace" \
  #  bob_harness:v1.0.6 \
  #  bob --chat-mode "$mode" --yolo --accept-license \
  #    --hide-intermediary-output \
  #    -p $PROMPT | glow -
  shuru run \
  --from bob-shell \
  --allow-net \
  --allow-host-writes \
  --mount $HOME/.bob:/root/.bob \
  --mount $workspace:/workspace \
  -- sh -c "cd /workspace && bob --yolo --accept-license --chat-mode $mode $P" | bat --language markdown --pp

  rc=${PIPESTATUS[0]}

  end=$(date +%s)
  elapsed=$((end - start))

  osascript \
  -e 'beep' \
  -e "display notification \"AI job completed (${elapsed}s)\" with title \"Terminal\"" \
  >/dev/null 2>&1

  printf '\n\nElapsed time: %ss\n' "$elapsed"


  return $rc
}


bmodes() {
  bob --help 2>&1 |
  sed -n '/--chat-mode/,/^[[:space:]]*--/p' |
  grep -Eo '"[^"]+"' |
  tr -d '"'
}
