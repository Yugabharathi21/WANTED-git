import React from 'react';

interface StatCardProps {
    label: string;
    value: string | number;
    sublabel?: string;
    trend?: {
        value: string;
        positive: boolean;
    };
}

const StatCard: React.FC<StatCardProps> = ({ label, value, sublabel, trend }) => (
    <div className="p-6 border border-white/5 bg-[#0A0A0A] hover:border-white/10 transition-all group">
        <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4 flex justify-between items-center">
            {label}
            {trend && (
                <span className={`text-[10px] ${trend.positive ? 'text-[#D3E97A]' : 'text-red-400'}`}>
                    {trend.value}
                </span>
            )}
        </div>
        <div className="text-3xl font-technor font-bold text-white mb-1 group-hover:text-[#D3E97A] transition-colors">{value}</div>
        {sublabel && <div className="text-[10px] text-zinc-600 uppercase">{sublabel}</div>}
    </div>
);

const ProfileStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
                label="Wallet Balance"
                value="1,240 CR"
                sublabel="Available for payout"
                trend={{ value: "+200 CR this week", positive: true }}
            />
            <StatCard
                label="Total XP"
                value="24,500"
                sublabel="Level 12 Specialist"
                trend={{ value: "+1.2k this week", positive: true }}
            />
            <StatCard
                label="Claims Completed"
                value="18"
                sublabel="Across 12 repositories"
            />
            <StatCard
                label="Success Rate"
                value="94%"
                sublabel="PR Merge percentage"
                trend={{ value: "+2% from last month", positive: true }}
            />
        </div>
    );
};

export default ProfileStats;
