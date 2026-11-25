function progressBar(name,threats){
    if (threats > 1){
        (progressBar.width = 12) && (progressBar.color = red)
    } if (name > 1){
        (progressBar.width = 22) && (progressBar.color = orange)
    }
}

module.exports = progressBar