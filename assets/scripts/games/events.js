'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  $('td').html('')
  console.log('new game ran!')
  api.createNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
const playerInfo = {
  playerX: true
}

const onPlay = function (event) {
  event.preventDefault()
  // add an if signed in thing here?
  if (playerInfo.playerX === true) {
    if ($(this).html() === '') {
      $(this).html('x')
    } else {
      $('h2').html('you can\'t do that!')
    }
    playerInfo.playerX = false
  } else {
    if ($(this).html() === '') {
      $(this).html('o')
    } else {
      $('h2').html('you can\'t do that!')
    }
    playerInfo.playerX = true
  }
  api.play()
    .then(ui.playSuccess)
    .catch(ui.playFailure)
}
//
// const addX = function (event) {
//   event.preventDefault()
//   // const data = getFormFields(event.target)
//   // const game = data.game
//   // // if (td !== 0) {
//   // gamesApi.show(game.playerX)
//   //   .then(gamesUi.onSuccess)
//   //   .catch(gamesUi.onError)
//   // // } else {
//   console.log('hey')
// }
// // }
//
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-game').on('submit', onNewGame)
  $('td').on('click', onPlay)
}

module.exports = {
  addHandlers
}
