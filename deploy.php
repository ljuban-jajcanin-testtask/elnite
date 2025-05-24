<?php
// Lokacija repozitorijuma na serveru (putanja iz cPanela)
$repoDir = '/home/elnite/repositories/elnite';

// Log fajl za debug (opciono)
$logFile = '/home/elnite/public_html/deploy.log';

$commands = [
    "cd $repoDir",
    'git pull origin main',
];

// Pokreni komande i sačuvaj output
$output = "";
foreach ($commands as $command) {
    $output .= shell_exec($command) . "\n";
}

// Upisi u log fajl
file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "]\n$output\n", FILE_APPEND);

echo "Deploy finished.";
