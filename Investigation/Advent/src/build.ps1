docker build -f Dockerfile . -t advent-builder
docker build -f Dockerfile.win . -t advent-builder-windows
docker run --rm -it -v $pwd/:/app/ -v $pwd/output/linux/:/output/ advent-builder
docker run --rm -it -v $pwd/:/app/ -v $pwd/output/windows/:/output/ advent-builder-windows