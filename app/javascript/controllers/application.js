// require jquery
// require jquery_ujs
// require foundation
// require turbolinks
// require_tree .

import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience

application.debug = false
window.Stimulus   = application

export { application }

