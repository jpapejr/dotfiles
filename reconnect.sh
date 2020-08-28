#!/bin/bash

mkdir -p $HOME/dotfiles

for f in `find . -type f |  grep -v .git | grep -v reconnect.sh |  sed 's#^./##'`; do
    # create the symlink
    echo -n ln -sf $HOME/dotfiles/$f $HOME/$f
    read
    ln -sf $HOME/dotfiles/$f $HOME/$f
done
