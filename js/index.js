var defaultSetting = {
    width: 400,
    height: 50,
    backgroundColor: '#00BFFF',
    fontColor: '#333333',
    fontWeight: 400,
    percentage: 0,
}
function Progress(options) {
    var self = this;
    self.state = Object.assign(defaultSetting, options);
    self.rootHtml = self.state.rootHtml ? self.state.rootHtml : document.body;
    self.container = null;
    self.progress = null;
    self.percent = null;
    self.percentSymbol = null,
    self.timer = null;
    self.containerWidth = 0;
    self.init();
    self.setProgressStyle();
    self.setProgress();
}

Progress.prototype = {
    getElementRect(ele) {
        return ele.getBoundingClientRect();
    },
    // 
    autoPlay() {
        var self = this;
        if (!self.timer) {
            self.timer = window.setInterval(function () {
                self.state.percentage++;
                self.progress.style.width = self.state.percentage + 'px';
                self.percent.innerText = Math.ceil((self.state.percentage / self.containerWidth) * 100);
                if (self.state.percentage === self.containerWidth) {
                    window.clearInterval(self.timer)
                }
            }, 10);
        }
    },
    setProgress() {
        this.progress.style.width = this.state.percentage + 'px';
        this.percent.innerText = Math.ceil((this.state.percentage / this.containerWidth) * 100);
    },
    createElement() {
        var fragment = document.createDocumentFragment();
        var container = document.createElement("section");
        var progress = document.createElement('div');
        var percentWrap = document.createElement('div');
        var percent = document.createElement('span');
        var percentSymbol = document.createElement('span');
        container.classList.add('container');
        progress.setAttribute('id', 'progress');
        percent.setAttribute('id', 'percent');
        percentWrap.classList.add('percent-wrap');
        percent.innerText = this.state.percentage;
        percentSymbol.innerText = '%';
        container.appendChild(progress);
        percentWrap.appendChild(percent);
        percentWrap.appendChild(percentSymbol);
        container.appendChild(percentWrap);
        this.container = container;
        this.progress = progress;
        this.percent = percent;
        this.percentSymbol = percentSymbol;
        fragment.appendChild(container);
        return fragment;
    },
    // 设置进度条样式
    setProgressStyle() {
        this.container.style.width = this.state.width + 'px';
        this.container.style.height = this.state.height + 'px';
        this.progress.style.backgroundColor = this.state.backgroundColor;
        this.percent.style.color = this.state.fontColor;
        this.percent.style.fontWeight = this.state.fontWeight;
        this.percentSymbol.style.color = this.state.fontColor;
        this.percentSymbol.style.fontWeight = this.state.fontWeight;
    },
    render() {
        var fragment = this.createElement();
        this.rootHtml.appendChild(fragment);
        this.containerWidth = this.getElementRect(this.container).width;
    },
    init() {
        this.render();
    }
};

window.Progress = Progress;