# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "debian/jessie64"
  config.vm.box_check_update = true

  config.vm.network :forwarded_port, host: 7770, guest: 7770
  config.vm.network :forwarded_port, guest: 22, host: 2222, id: "ssh", disabled: true
  config.vm.network :forwarded_port, guest: 22, host: 2227, auto_correct: true

  config.vm.synced_folder "./", "/vagrant", id: "vagrant-root",
    owner: "vagrant",
    group: "vagrant",
    mount_options: ["dmode=777,fmode=777"]

  config.vm.provision "shell", path: "provision/provision.sh"

  # if RSYNC enabled
  config.vm.synced_folder "./", "/home/vagrant/nodejs", type: "rsync", owner: "vagrant", group: "vagrant",
    rsync__exclude: [".git/", ".idea/"],
    rsync__chown: true,
    rsync__auto: true,
    rsync_args: ["--verbose", "--delete", "--progress", "--perms", "--chmod=ugo=rwxs"]

  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--memory", "1024"]
    v.customize ["modifyvm", :id, "--ioapic", "on"]
    v.customize ["modifyvm", :id, "--cpus", "1"]
  end

  #TODO
  #netsh interface portproxy add v4tov4 listenport=443 listenaddress=host connectport=4446 connectaddress=127.0.0.1
end
