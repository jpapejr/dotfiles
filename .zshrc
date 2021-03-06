# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/jtpape/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git zsh-autosuggestions osx)

#source $ZSH/oh-my-zsh.sh

export ZSH_AUTOSUGGEST_USE_ASYNC=true

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
#
ZSH_AUTOSUGGEST_STRATEGY=(history completion)
autoload -U compinit && compinit

source <(oc completion zsh)

alias gps='gopass show -c'
alias ic='ibmcloud'
alias iks='ibmcloud ks'
alias icr='ibmcloud cr'
alias isa='ibmcloud sat'
alias k='kubectl'
alias kns='kubectl -n $NS'
alias ctx='kubectl config get-contexts'
alias clusters='ibmcloud ks cluster ls'
alias vms='ibmcloud is ins'
alias vpc='ibmcloud is'
alias ics='ibmcloud schematics'
alias svcs="ibmcloud resource service-instances --output json | jq '.[] | {name: .name, type: .crn | split(\":\")}' -c"
alias rg="ibmcloud target | awk '/.*Resource group.*/ { print $3}'"

function ns {
	export NS=$1
}

function vmip {
	#ibmcloud sl vs list --output json | jq ".[] | select( .hostname == \"$1\") | (.primaryIpAddress)" -r
	ibmcloud is instances --output json | jq ".[] | select( .name == \"$1\") | (.network_interfaces[].floating_ips[].address)" -r
}

function ssht { 
	ssh root@$1 -t "sh -c 'tmux a -t ssh_session || tmux new -s ssh_session'"
}

function coderpass {
	ssh root@$(vmip $1) cat /home/coder/pw.txt
}

function bootstrap {
	 ssh root@$(vmip $1) "curl -vv https://s3.us-east.cloud-object-storage.appdomain.cloud/bootstrap-scripts/bootstrap_$2.sh | bash"
 }

function tmuxify {
	scp ~/.tmux.conf root@$(vmip $1):/root
	ssh root@$(vmip $1) cat /home/coder/pw.txt
	ssh-copy-id coder@$(vmip $1)
}


eval "$(starship init zsh)"
