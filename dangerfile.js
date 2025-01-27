const { warn } = require("danger");


// 200行以上の変更を警告
const totalLinesChanged = danger.github.pr.additions + danger.github.pr.deletions;
if (totalLinesChanged > 200) {
  warn(`このPRには合計 ${totalLinesChanged} 行の変更があります。レビューの負担を軽減するため、可能であればPRを小さく分割してください。`);
}

// 10ファイル以上の変更を警告
const modifiedFilesCount = danger.git.modified_files.length + danger.git.created_files.length + danger.git.deleted_files.length;
if (modifiedFilesCount > 10) {
  warn(`このPRには ${modifiedFilesCount} 個のファイル変更があります。複雑な変更はレビューが難しくなるため、分割を検討してください。`);
}