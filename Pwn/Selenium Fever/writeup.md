The configuration and the script both fail to stop visits to `file://` URIs, so visiting `file:///challenge/` will show the application directory, and the flag `d:ctf{insecure-flag-transfer-protocol}` can be found by visiting `file:///challenge/flag.txt`.