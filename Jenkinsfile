#!/usr/bin/env groovy

import groovy.transform.Field

@Field def projectName = 'product-page-react'

node('slave') {
  deleteDir()
  checkout scm
}
