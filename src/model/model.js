class Base {
    constructor(info, data) {
        this.info = info;
        this.data = data;
    }
}


class successModel extends Base {
    constructor(info, data) {
        super(info, data);
        this.success = true;
    }
}

class errorModel extends Base {
    constructor(info, data) {
        super(info, data);
        this.success = false;
    }
}

module.exports={
    successModel,
    errorModel
}