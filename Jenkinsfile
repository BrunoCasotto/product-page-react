#!/usr/bin/env groovy

import groovy.transform.Field

@Field def projectName = 'product-page-react'

node {
  deleteDir()
  gitCheckout()
  installDependencies()
}

def gitCheckout() {
    if (commitId) {
    echo "checkout commitId: ${commitId}"
    checkout([
      $class                           : 'GitSCM',
      branches                         : [[name: commitId]],
      doGenerateSubmoduleConfigurations: false,
      submoduleCfg                     : [],
      userRemoteConfigs                : []
    ])
  } else {
    stage ('GIT Checkout') {
      sh 'git rev-parse HEAD > commit-id'
      commitId = readFile('commit-id').trim()
    }
  }
}

def installDependencies() {
  stage ('Install Dependencies') {
    sh 'npm i'
  }
}