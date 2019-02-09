#!/usr/bin/env groovy

import groovy.transform.Field

@Field def projectName = 'product-page-react'

node('slave') {
  deleteDir()
  gitCheckout()
  installDependencies()
}

def gitCheckout() {
  stage ('checkout') {
    echo "checkout for hmg commitId: ${commitId}"
    checkout([
      $class                           : 'GitSCM',
      branches                         : [[name: commitId]],
      doGenerateSubmoduleConfigurations: false,
      submoduleCfg                     : [],
      userRemoteConfigs                : []
    ])
  }
}

def installDependencies() {
  stage ('Install Dependencies') {
    sh 'npm i'
  }
}