#!/usr/bin/env groovy

import groovy.transform.Field

@Field def projectName = 'product-page-react'

stage 'Checkout'

node('slave') {
  deleteDir()
  checkout scm
}