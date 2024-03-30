/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


export const DEFAULT_SETTINGS = {
  disableBeforeInput: false,
  isAutocomplete: true,
  isCharLimit: false,
  isCharLimitUtf8: false,
  isCollab: false,
  isMaxLength: false,
  isRichText: true,
  measureTypingPerf: false,
  shouldUseLexicalContextMenu: true,
  showNestedEditorTreeView: false,
  showTableOfContents: false,
  showTreeView: false,
  tableCellBackgroundColor: false,
  tableCellMerge: false,
  speechToText: false,
  actionButtons: false
};

export type SettingName = keyof typeof DEFAULT_SETTINGS;

export type Settings = typeof DEFAULT_SETTINGS;
