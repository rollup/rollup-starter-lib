workflow "New workflow" {
  resolves = ["GitHub Action for npm"]
  on = "push"
}

action "GitHub Action for npm" {
  uses = "actions/npm@1.0.0"
  secrets = ["NPM_AUTH_TOKEN"]
}
