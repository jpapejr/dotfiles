#!/bin/bash

cd dotfiles
for f in `find . -type f | sed 's#^./##'`; do
    # create the directory in which to put the config file's symlink
    echo -n mkdir $HOME/`dirname $f`
    read
    mkdir -p $HOME/`dirname $f`

    # create the symlink
    echo -n ln -sf $HOME/dotfiles/$f $HOME/$f
    read
    ln -sf $HOME/dotfiles/$f $HOME/$f
done
cd ..
